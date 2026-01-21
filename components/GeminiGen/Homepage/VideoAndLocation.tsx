import VideoPresentation from "./VideoPresentation";
import Location from "./Location";

export default function VideoAndLocation() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
        <VideoPresentation />
        <Location />
      </div>
    </section>
  );
}
