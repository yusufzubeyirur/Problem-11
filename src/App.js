import { CameraIcon, VideoCameraIcon } from "@heroicons/react/24/outline";

// Bir "BoxButton" bileşeni oluşturun ve farklı içerik iletmek için children prop'unu kullanın
function BoxButton({ children }) {
  return (
    <button
      type="button"
      className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      {children}
    </button>
  );
}

export default function App() {
  return (
    <div className="space-y-4 p-8 max-w-sm mx-auto">
      <BoxButton>
        <CameraIcon className="mx-auto h-12 w-12 text-gray-400" />
        <span className="mt-2 block text-sm font-semibold text-gray-900">
          Yeni bir resim ekleyin
        </span>
      </BoxButton>

      <BoxButton>
        <VideoCameraIcon className="mx-auto h-12 w-12 text-gray-400" />
        <span className="mt-2 block text-sm font-semibold text-gray-900">
          Yeni bir video oluşturun
        </span>
      </BoxButton>
    </div>
  );
}
