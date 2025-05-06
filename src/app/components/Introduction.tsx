import { FaEnvelope, FaPhoneAlt, FaFacebookMessenger } from "react-icons/fa";

export default function Introduction() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-100 to-blue-50 px-6 py-12">
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden">
        {/* Avatar */}
        <div className="md:w-1/3 bg-gradient-to-b from-indigo-300 to-indigo-500 flex items-center justify-center p-8">
          <img
            src="/avatar.jpg"
            alt="Avatar"
            className="w-44 h-44 rounded-full border-4 border-white shadow-lg transform hover:scale-105 transition"
          />
        </div>

        {/* Info */}
        <div className="md:w-2/3 p-8 space-y-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-1">
              Nguyễn Quốc Khánh
            </h1>
            <h2 className="text-lg text-indigo-600 font-medium">
              Lập trình viên BackEnd
            </h2>
          </div>

          <p className="text-gray-700 leading-relaxed">
            Xin chào! Tôi là một lập trình viên web với đam mê xây dựng hệ thống tối ưu và dễ sử dụng. Tôi có kinh nghiệm trong việc thiết kế
            và phát triển các ứng dụng web hoàn chỉnh từ frontend đến backend. Tôi không ngừng học hỏi công nghệ mới và cải thiện kỹ năng mỗi ngày.
          </p>

          {/* Kỹ năng */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Kỹ năng</h3>
            <div className="space-y-3">
              {[
                { name: "PHP", level: 90 },
                { name: "Python", level: 85 },
                { name: "JavaScript", level: 80 },
                { name: "C#", level: 88 },
              ].map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-indigo-500 h-2.5 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Nút liên hệ */}
          <div className="flex flex-wrap gap-4 mt-4">
            <a
              href="mailto:khanhdzproa@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2 bg-indigo-600 text-white rounded-full shadow hover:bg-indigo-700 transition"
            >
              <FaEnvelope /> Email
            </a>
            <a
              href="tel:0357558779"
              className="inline-flex items-center gap-2 px-5 py-2 bg-green-500 text-white rounded-full shadow hover:bg-green-600 transition"
            >
              <FaPhoneAlt /> Gọi
            </a>
            <a
              href="https://m.me/KhanhhSadBoiz"
              target="_blank"
              className="inline-flex items-center gap-2 px-5 py-2 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600 transition"
            >
              <FaFacebookMessenger /> Messenger
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}