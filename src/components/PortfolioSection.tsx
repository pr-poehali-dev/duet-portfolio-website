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
      category: "Веб-интерфейс",
      description:
        "Редизайн комплексного дашборда для повышения ясности данных",
      author: "alice",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=400&fit=crop",
    },
    {
      id: 2,
      title: "Мобильное приложение банка",
      category: "UX/UI дизайн",
      description: "Создание интуитивного интерфейса для банковских операций",
      author: "alice",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=400&fit=crop",
    },
    {
      id: 3,
      title: "SaaS платформа",
      category: "Веб-дизайн",
      description: "Дизайн-система для B2B сервиса автоматизации",
      author: "alice",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=400&fit=crop",
    },
    {
      id: 4,
      title: "Кафе-кондитерская",
      category: "Брендинг",
      description: "Создание яркого бренда и фирменного стиля для кафе",
      author: "anna",
      image:
        "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=500&h=400&fit=crop",
    },
    {
      id: 5,
      title: "Лендинг стартапа",
      category: "Веб-дизайн",
      description: "Яркая посадочная страница для IT-продукта",
      author: "anna",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=400&fit=crop",
    },
    {
      id: 6,
      title: "Графическая айдентика",
      category: "Графический дизайн",
      description: "Комплексная визуальная идентичность для модного бренда",
      author: "anna",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop",
    },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.author === filter);

  return (
    <section className="py-20 bg-[#F8F9FA] px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Наши проекты
        </h2>

        {/* Фильтры */}
        <div className="flex justify-center mb-12 space-x-4">
          <button
            onClick={() => setFilter("all")}
            className={`px-6 py-2 rounded-sm font-medium transition-colors ${
              filter === "all"
                ? "bg-gray-900 text-white"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
          >
            Все
          </button>
          <button
            onClick={() => setFilter("alice")}
            className={`px-6 py-2 rounded-sm font-medium transition-colors ${
              filter === "alice"
                ? "text-white"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
            style={{
              backgroundColor: filter === "alice" ? "#4A6FA5" : undefined,
            }}
          >
            Алиса
          </button>
          <button
            onClick={() => setFilter("anna")}
            className={`px-6 py-2 rounded-sm font-medium transition-colors ${
              filter === "anna"
                ? "text-white"
                : "bg-white text-gray-600 hover:bg-gray-100"
            }`}
            style={{
              backgroundColor: filter === "anna" ? "#D6809F" : undefined,
            }}
          >
            Анна
          </button>
        </div>

        {/* Проекты */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border"
              style={{
                borderColor: project.author === "alice" ? "#4A6FA5" : "#D6809F",
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span
                    className="text-sm font-medium px-2 py-1 rounded text-white"
                    style={{
                      backgroundColor:
                        project.author === "alice" ? "#4A6FA5" : "#D6809F",
                    }}
                  >
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
