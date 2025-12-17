import { motion } from "framer-motion";

export default function BirthdayForLaura() {
  const photos = [
    "/la1.jpeg",
    "/la2.jpeg",
    "/la3.jpeg",
    "/la4.jpeg",
    "/la5.jpeg",
    "/la6.jpeg",
    "/la7.jpeg",
    "/la8.jpeg",
    "/la9.jpeg",
    "/la10.jpeg",
    "/la11.jpeg",
    "/la12.jpeg",
    "/la13.jpeg",
    "/la14.jpeg",
    "/la15.jpeg",
    "/l4.jpeg",
    "/l5.jpeg",
    "/l6.jpeg",
    "/la17.jpeg",
    "/la18.jpeg",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-pink-200 to-purple-300 text-gray-800">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center py-16 px-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">🎉 Happy Birthday 🎉</h1>
        <h2 className="text-2xl md:text-3xl font-semibold">Laura Andromeda 💖</h2>
        <p className="mt-4 text-lg">Hari ini dunia harus tau kamu lagi ulang tahun</p>
      </motion.div>

      {/* Message */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="max-w-3xl mx-auto bg-white/90 rounded-2xl shadow-xl p-8 mb-16"
      >
        <h3 className="text-2xl font-bold mb-4 text-center">Untuk Kamu, Laura ❤️</h3>
        <p className="text-lg leading-relaxed text-center">
          Selamat ulang tahun ya sayang. Terima kasih sudah jadi bagian paling
          indah dalam hidup aku. Semoga semua mimpi kamu satu per satu tercapai,
          semoga kamu selalu sehat, selalu bahagia, dan selalu dikelilingi orang
          yang tulus sayang sama kamu. Aku harap, aku bisa terus ada di setiap
          ulang tahun kamu berikutnya 🤍
        </p>
      </motion.div>

      {/* Gallery */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <h3 className="text-2xl font-bold text-center mb-8">My Ayang 📸</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {photos.map((src, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-2xl shadow-lg"
            >
              <img
                src={src}
                alt={`Laura ${index + 1}`}
                className="w-full h-48 object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center pb-10 text-sm">
        Dibuat dengan ❤️ khusus untuk Laura Andromeda
      </footer>
    </div>
  );
}
