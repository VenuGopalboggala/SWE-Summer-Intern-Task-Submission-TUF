export default function HeroImage() {
  return (
    <div className="h-48 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb')",
      }}
    >
      <div className="h-full bg-black/30 flex items-end p-4 text-white text-xl font-semibold">
        Wall Calendar
      </div>
    </div>
  );
}