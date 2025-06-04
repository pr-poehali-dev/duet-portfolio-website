import { useState } from "react";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  author: "alice" | "anna";
  image: string;
}

const PortfolioSection = () => {
  const [filter, setFilter] = useState<"all" | "alice" | "anna">("all");

  const projects: Project[] = [
    {
      id: 1,
      title: "Корпоративный дашборд",
      category: "ИНТЕРФЕЙС",
      description:
        "Редизайн комплексного дашборда для повышения ясности данных",
      author: "alice",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=400&fit=crop",
    },
    {
      id: 2,
      title: "Мобильное приложение банка",
      category: "UX/UI",
      description: "Создание интуитивного интерфейса для банковских операций",
      author: "alice",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=400&fit=crop",
    },
    {
      id: 3,
      title: "SaaS платформа",
      category: "ВЕБ-ДИЗАЙН",
      description: "Дизайн-система для B2B сервиса автоматизации",
      author: "alice",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=400&fit=crop",
    },
    {
      id: 4,
      title: "Кафе-кондитерская",
      category: "БРЕНДИНГ",
      description: "Создание яркого бренда и фирменного стиля для кафе",
      author: "anna",
      image:
        "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=500&h=400&fit=crop",
    },
    {
      id: 5,
      title: "Лендинг стартапа",
      category: "ВЕБ-ДИЗАЙН",
      description: "Яркая посадочная страница для IT-продукта",
      author: "anna",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=400&fit=crop",
    },
    {
      id: 6,
      title: "Графическая айдентика",
      category: "АЙДЕНТИКА",
      description: "Комплексная визуальная идентичность для модного бренда",
      author: "anna",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop",
    },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.author === filter);

  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-light text-black mb-8 tracking-tight">
            ПРОЕКТЫ
          </h2>
          <div className="w-24 h-1 bg-black mx-auto"></div>
        </div>

        {/* Фильтры */}
        <div className="flex justify-center mb-16 gap-2">
          {[
            { key: "all", label: "ВСЕ" },
            { key: "alice", label: "АЛИСА", color: "bg-emerald-500" },
            { key: "anna", label: "АННА", color: "bg-emerald-600" },
          ].map((item) => (
            <button
              key={item.key}
              onClick={() => setFilter(item.key as any)}
              className={`px-8 py-3 text-sm font-medium tracking-wider transition-all ${
                filter === item.key
                  ? `${item.color || "bg-black"} text-white`
                  : "bg-white text-black border border-gray-200 hover:border-black"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Проекты */}
        <div className="grid lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative overflow-hidden bg-gray-100 aspect-[4/3] mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>

              <div className="space-y-3">
                <div className="text-xs font-medium text-gray-500 tracking-widest">
                  {project.category}
                </div>
                <h3 className="text-xl font-light text-black group-hover:text-gray-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
