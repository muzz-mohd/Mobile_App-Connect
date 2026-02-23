import { motion } from "framer-motion";
import { MessageCircle, Heart, Share2, MoreHorizontal } from "lucide-react";

export default function Community() {
  const posts = [
    {
      id: 1,
      author: "Imam Youssef",
      avatar: "IY",
      time: "2 hours ago",
      content: "Alhamdulillah, our youth group successfully completed the community clean-up drive today. Proud of our future leaders! May Allah reward everyone who participated.",
      likes: 124,
      comments: 18,
      verified: true
    },
    {
      id: 2,
      author: "Masjid Administration",
      avatar: "MA",
      time: "5 hours ago",
      content: "Reminder: The monthly family potluck is this Saturday after Maghrib. Please sign up at the front desk or via the Programs tab. Don't forget to bring your favorite dish!",
      likes: 89,
      comments: 5,
      verified: true
    },
    {
      id: 3,
      author: "Sister Amina",
      avatar: "SA",
      time: "1 day ago",
      content: "Does anyone know if the sisters' study circle is meeting this week? I missed the last announcement.",
      likes: 12,
      comments: 4,
      verified: false
    }
  ];

  return (
    <div className="min-h-full pb-8 bg-slate-50">
      <header className="px-6 pt-12 pb-6 bg-white sticky top-0 z-40 border-b border-slate-100">
        <h1 className="text-2xl font-bold font-heading text-slate-900">Community</h1>
        <p className="text-sm text-slate-500 mt-1">Connect with your local muslim community</p>
      </header>

      <div className="px-6 py-6 space-y-6">
        {/* Create Post Input */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-4 smooth-shadow border border-slate-100 flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-600 shrink-0">
            Me
          </div>
          <input 
            type="text" 
            placeholder="Share something with the community..." 
            className="flex-1 bg-transparent border-none focus:ring-0 text-sm outline-none placeholder:text-slate-400"
            data-testid="input-create-post"
          />
        </motion.div>

        {/* Feed */}
        <div className="space-y-6">
          {posts.map((post, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              key={post.id}
              className="bg-white rounded-[2rem] p-5 smooth-shadow border border-slate-100"
              data-testid={`post-${post.id}`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white ${
                    post.verified ? 'bg-primary' : 'bg-slate-400'
                  }`}>
                    {post.avatar}
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <h3 className="font-bold text-slate-900">{post.author}</h3>
                      {post.verified && (
                        <div className="w-4 h-4 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center text-[10px]">✓</div>
                      )}
                    </div>
                    <p className="text-xs text-slate-400 font-medium">{post.time}</p>
                  </div>
                </div>
                <button className="text-slate-400 p-2 hover:bg-slate-50 rounded-full transition-colors">
                  <MoreHorizontal size={20} />
                </button>
              </div>
              
              <p className="text-slate-700 text-sm leading-relaxed mb-6">
                {post.content}
              </p>
              
              <div className="flex items-center gap-6 border-t border-slate-50 pt-4">
                <button className="flex items-center gap-2 text-slate-500 hover:text-rose-500 transition-colors group">
                  <div className="p-2 rounded-full group-hover:bg-rose-50 transition-colors">
                    <Heart size={18} />
                  </div>
                  <span className="text-xs font-semibold">{post.likes}</span>
                </button>
                <button className="flex items-center gap-2 text-slate-500 hover:text-blue-500 transition-colors group">
                  <div className="p-2 rounded-full group-hover:bg-blue-50 transition-colors">
                    <MessageCircle size={18} />
                  </div>
                  <span className="text-xs font-semibold">{post.comments}</span>
                </button>
                <button className="flex items-center gap-2 text-slate-500 hover:text-emerald-500 transition-colors group ml-auto">
                  <div className="p-2 rounded-full group-hover:bg-emerald-50 transition-colors">
                    <Share2 size={18} />
                  </div>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
