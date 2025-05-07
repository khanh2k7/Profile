"use client";
import { useState } from "react";

export default function Introduction() {
  const [activeTab, setActiveTab] = useState("about");

  const technicalSkills = [
    { name: "PHP", level: 90 },
    { name: "Python", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "C#", level: 88 },
  ];

  const softSkills = [
    { name: "Làm việc nhóm", level: 95 },
    { name: "Quản lý thời gian", level: 85 },
    { name: "Giải quyết vấn đề", level: 90 },
    { name: "Giao tiếp", level: 88 },
  ];

  const experiences = [
    {
      role: "Backend Developer",
      company: "Tech Solutions",
      period: "2022 - Hiện tại",
      description:
        "Phát triển và tối ưu hóa API, xây dựng cơ sở dữ liệu, và triển khai các tính năng mới.",
    },
    {
      role: "Fullstack Developer",
      company: "Digital Innovations",
      period: "2020 - 2022",
      description:
        "Làm việc với nhiều công nghệ web, phát triển các ứng dụng đáp ứng nhu cầu của khách hàng.",
    },
  ];

  const projects = [
    {
      name: "E-commerce Platform",
      tech: "PHP, Laravel, MySQL",
      description:
        "Nền tảng thương mại điện tử với tính năng quản lý sản phẩm, giỏ hàng và thanh toán.",
    },
    {
      name: "Task Management System",
      tech: "Python, Django, PostgreSQL",
      description:
        "Hệ thống quản lý công việc với thời gian thực và phân quyền người dùng.",
    },
    {
      name: "Social Media Dashboard",
      tech: "React, Node.js, MongoDB",
      description:
        "Bảng điều khiển để theo dõi và phân tích dữ liệu từ nhiều nền tảng mạng xã hội.",
    },
  ];
  interface Experience {
    role: string;
    company: string;
    period: string;
    description: string;
  }
  interface TechnicalSkill {
    name: string;
    level: number;
  }

  interface ProjectCardProps {
    name: string;
    tech: string;
    description: string;
  }
  const SkillBar = ({ name, level }: TechnicalSkill) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 font-medium">{name}</span>
        <span className="text-gray-600">{level}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full">
        <div
          className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );

  const ExperienceCard = ({
    role,
    company,
    period,
    description,
  }: Experience) => (
    <div className="mb-6 border-l-4 border-indigo-500 pl-4">
      <h3 className="text-lg font-bold text-gray-800">{role}</h3>
      <div className="flex items-center mb-2">
        <span className="text-indigo-600 font-medium">{company}</span>
        <span className="mx-2 text-gray-400">•</span>
        <span className="text-gray-500 text-sm">{period}</span>
      </div>
      <p className="text-gray-700">{description}</p>
    </div>
  );

  const ProjectCard = ({ name, tech, description }: ProjectCardProps) => (
    <div className="mb-6 bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <h3 className="text-lg font-bold text-gray-800 mb-1">{name}</h3>
      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-2">
        {tech}
      </span>
      <p className="text-gray-700">{description}</p>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <div className="animate-fadeIn">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Giới thiệu</h2>
            <p className="text-gray-700 mb-4">
              Tôi là một nhà phát triển phần mềm với đam mê xây dựng các giải
              pháp hiệu quả và sáng tạo. Với kinh nghiệm trong các công nghệ
              backend và frontend, tôi luôn tìm kiếm cơ hội để học hỏi và áp
              dụng các công nghệ mới.
            </p>
            <p className="text-gray-700">
              Mục tiêu của tôi là tạo ra các ứng dụng không chỉ đáp ứng yêu cầu
              kỹ thuật mà còn mang lại trải nghiệm tuyệt vời cho người dùng
              cuối.
            </p>
          </div>
        );
      case "skills":
        return (
          <div className="animate-fadeIn">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Kỹ năng</h2>

            <h3 className="text-lg font-semibold text-gray-700 mb-3">
              Kỹ năng kỹ thuật
            </h3>
            <div className="mb-6">
              {technicalSkills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} />
              ))}
            </div>

            <h3 className="text-lg font-semibold text-gray-700 mb-3">
              Kỹ năng mềm
            </h3>
            <div>
              {softSkills.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
        );
      case "experience":
        return (
          <div className="animate-fadeIn">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Kinh nghiệm
            </h2>
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        );
      case "projects":
        return (
          <div className="animate-fadeIn">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Dự án</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-800 to-purple-900 p-6 md:p-12 flex items-center justify-center">
      <div className="max-w-6xl w-full bg-white bg-opacity-10 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white border-opacity-20">
        <div className="flex flex-col lg:flex-row">
          {/* Sidebar */}
          <div className="lg:w-1/3 bg-gradient-to-b from-indigo-600 to-purple-700 text-white p-8 flex flex-col">
            <div className="flex flex-col items-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 blur-lg opacity-70"></div>
                <img
                  src="/avatar.jpg"
                  alt="Avatar"
                  className="w-40 h-40 rounded-full border-4 border-white shadow-xl relative z-10 object-cover"
                />
              </div>
              <h1 className="text-3xl font-bold mt-6 text-center">
                Nguyễn Quốc Khánh
              </h1>
              <h2 className="text-xl text-blue-200 font-medium text-center">
                Backend Developer
              </h2>
            </div>

            {/* Contact info */}
            <div className="space-y-4 mt-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                  <img src="/gmail.svg" alt="Email" className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-blue-200">Email</p>
                  <p className="font-medium">khanhdzproa@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                  <img src="/phone.svg" alt="Email" className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-blue-200">Điện thoại</p>
                  <p className="font-medium">0357558779</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                  <img
                    src="/messenger.svg"
                    alt="Messenger"
                    className="w-5 h-5"
                  />
                </div>
                <div>
                  <p className="text-sm text-blue-200">Messenger</p>
                  <p className="font-medium">@KhanhhSadBoiz</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                  <img src="/github.svg" alt="GitHub" className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-blue-200">GitHub</p>
                  <p className="font-medium">@khanh-dev</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-auto pt-8">
              <div className="flex justify-center space-x-4">
                <a
                  href="mailto:khanhdzproa@gmail.com"
                  className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
                >
                  <img src="/gmail.svg" alt="Email" className="w-5 h-5" />
                </a>
                <a
                  href="tel:0357558779"
                  className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
                >
                  <img src="/phone.svg" alt="Phone" className="w-5 h-5" />
                </a>
                <a
                  href="https://m.me/KhanhhSadBoiz"
                  target="_blank"
                  className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
                >
                  <img
                    src="/messenger.svg"
                    alt="Messenger"
                    className="w-5 h-5"
                  />
                </a>
                <a
                  href="https://github.com/khanh-dev"
                  target="_blank"
                  className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
                >
                  <img src="/github.svg" alt="GitHub" className="w-5 h-5" />
                </a>
              </div>
              <div className="mt-6">
                <a
                  href="https://github.com/khanh-dev"
                  target="_blank"
                  className="w-full py-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl text-center font-medium flex items-center justify-center gap-2 hover:from-blue-500 hover:to-purple-600 transition-all duration-300"
                >
                  <img src="/github.svg" alt="GitHub" className="w-5 h-5" />
                  Xem GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Content tab bên phải */}
          <div className="lg:w-2/3 bg-white p-8 rounded-xl shadow-lg">
            {/* Navigation tabs */}
            <div className="flex flex-wrap gap-3 border-b border-gray-200 pb-4">
              <button
                onClick={() => setActiveTab("about")}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeTab === "about"
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 font-medium"
                }`}
              >
                Giới thiệu
              </button>
              <button
                onClick={() => setActiveTab("skills")}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeTab === "skills"
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 font-medium"
                }`}
              >
                Kỹ năng
              </button>
              <button
                onClick={() => setActiveTab("experience")}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeTab === "experience"
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 font-medium"
                }`}
              >
                Kinh nghiệm
              </button>
              <button
                onClick={() => setActiveTab("projects")}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeTab === "projects"
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 font-medium"
                }`}
              >
                Dự án
              </button>
            </div>

            {/* Tab content */}
            <div className="mt-6">{renderTabContent()}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
