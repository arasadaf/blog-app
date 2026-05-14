import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router";
import { useAuth } from "../store/authStore";

import {
  articleGrid,
  articleCardClass,
  articleTitle,
  articleExcerpt,
  articleMeta,
  timestampClass,
  tagClass,
  loadingClass,
  errorClass,
  emptyStateClass,
  articleStatusDeleted,
  articleStatusActive
} from "../styles/common";

function AuthorArticles() {
  const navigate = useNavigate();
  const user = useAuth((state) => state.currentUser);
  // console.log('AuthorArticles user:', user);

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const toggleStatus = async (articleId, currentStatus) => {
    if (!window.confirm(`Are you sure? ${currentStatus ? 'This will soft-delete the article (can be restored).' : 'This will restore the article.'}`)) return;

    try {
      await axios.patch(`${import.meta.env.VITE_API_URL}/author-api/articles/${articleId}/status`, { 
        isArticleActive: !currentStatus 
      }, { withCredentials: true });
      
      // Refresh list
      setArticles(articles.map(a => a._id === articleId ? { ...a, isArticleActive: !currentStatus } : a));
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || 'Failed to update status');
    }
  };
  
  useEffect(() => {
    console.log('AuthorArticles user:', user);
    
    if (!user) {
      setError('Please login to view your articles.');
      return;
    }

    // Try user._id first, fallback to user.id or user.userId
    const userId = user._id || user.id || user.userId;
    if (!userId) {
      console.log('No user ID found. User object:', user);
      setError('User ID not found. Please login again.');
      return;
    }

    const getAuthorArticles = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/author-api/articles/${userId}`, { withCredentials: true });
        setArticles(res.data.payload || []);
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err.response?.data?.message || err.response?.data?.error || "Failed to fetch articles");
      } finally {
        setLoading(false);
      }
    };

    getAuthorArticles();
  }, [user]);

  if (loading) return <div className={loadingClass}>Loading articles...</div>;
  if (error) return <div className={errorClass}>{error}</div>;

  return (
    <div className="px-1 md:px-0">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 bg-white/40 backdrop-blur-sm p-5 md:p-6 rounded-2xl md:rounded-3xl border border-white/40 shadow-sm">
        <h2 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500">
          Your Authored Articles
        </h2>
        <span className="bg-indigo-100 text-indigo-700 py-1.5 px-4 rounded-full font-bold text-xs md:text-sm shadow-inner">
          {articles.filter(a => a.isArticleActive).length} Active / {articles.length} Total
        </span>
      </div>

      {articles.length === 0 ? (
        <div className={emptyStateClass + " bg-white/40 rounded-3xl border border-dashed border-gray-300"}>
          No articles found. Create your first one!
        </div>
      ) : (
        <div className={articleGrid}>
          {articles.map((article) => (
            <div key={article._id} className={`${articleCardClass} relative group/art`}>
              {article.imageUrl && (
                <div className="w-full h-40 md:h-48 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-xl md:rounded-2xl mb-4 overflow-hidden relative shadow-inner">
                  <img src={article.imageUrl} alt="Cover" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3">
                    <span className={tagClass}>{article.category || 'General'}</span>
                  </div>
                  {/* Status Badge */}
                  <span className={article.isArticleActive ? articleStatusActive : articleStatusDeleted}>
                    {article.isArticleActive ? "ACTIVE" : "DELETED"}
                  </span>
                </div>
              )}
              {!article.imageUrl && (
                <div className="mb-4 flex gap-2">
                  <span className={tagClass}>{article.category || 'General'}</span>
                  {/* Status Badge */}
                  <span className={article.isArticleActive ? articleStatusActive : articleStatusDeleted}>
                    {article.isArticleActive ? "ACTIVE" : "DELETED"}
                  </span>
                </div>
              )}

              <div className="flex flex-col gap-2 grow px-1">
                <p className={articleTitle}>{article.title}</p>
                <p className={articleExcerpt}>{article.content.slice(0, 100)}...</p>
                {(article.comments || []).length > 0 && (
                  <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium inline-flex items-center gap-1 w-fit">
                    💬 {(article.comments || []).length}
                  </span>
                )}
              </div>

              <div className="mt-auto pt-4 border-t border-gray-100/50 flex flex-col gap-3">
                <div className="flex justify-between items-center text-xs px-1">
                  <span className={articleMeta}>By You</span>
                  <span className={timestampClass}>{new Date(article.updatedAt).toLocaleDateString()}</span>
                </div>
                
                {/* Actions: Always visible on mobile, hover on desktop */}
                <div className="flex md:flex-col gap-2 md:opacity-0 md:invisible md:group-hover/art:opacity-100 md:group-hover/art:visible transition-all duration-200 md:absolute md:bottom-4 md:right-4 bg-white/95 md:bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl p-2 md:p-3 shadow-lg md:shadow-2xl border border-gray-100 mt-2 md:mt-0">
                  <button 
                    onClick={() => navigate(`/edit-article/${article._id}`, { state: article })}
                    className="flex-1 text-emerald-600 hover:text-emerald-700 font-bold text-[10px] md:text-xs px-3 py-2 md:py-1.5 rounded-lg md:rounded-xl bg-emerald-50 hover:bg-emerald-100 transition-all shadow-sm"
                  >
                    ✏️ Edit
                  </button>
                  <button 
                    onClick={() => toggleStatus(article._id, article.isArticleActive)}
                    className="flex-1 text-red-600 hover:text-red-700 font-bold text-[10px] md:text-xs px-3 py-2 md:py-1.5 rounded-lg md:rounded-xl bg-red-50 hover:bg-red-100 transition-all shadow-sm"
                  >
                    {article.isArticleActive ? "🗑️ Del" : "↺ Res"}
                  </button>
                  {(article.comments || []).length > 0 && (
                    <button 
                      onClick={async () => {
                        try {
                          const res = await axios.get(`${import.meta.env.VITE_API_URL}/author-api/articles/${article._id}/comments`, { withCredentials: true });
                          alert(`Comments (${res.data.payload.comments.length}):\n\n` + 
                            res.data.payload.comments.map(c => 
                              `${c.user?.firstName || 'User'}: ${c.comment}`
                            ).join('\n\n')
                          );
                        } catch (err) {
                          alert('Failed to fetch comments');
                        }
                      }}
                      className="flex-1 text-blue-600 hover:text-blue-700 font-bold text-[10px] md:text-xs px-3 py-2 md:py-1.5 rounded-lg md:rounded-xl bg-blue-50 hover:bg-blue-100 transition-all shadow-sm"
                    >
                      💬 Cmd
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AuthorArticles;