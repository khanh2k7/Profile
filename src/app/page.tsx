import Image from 'next/image';

export default function Profile() {
  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-100">
      <section className="text-center bg-white p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <Image
            src="/globe.svg"
            alt="Profile Picture"
            width={150}
            height={150}
            className="rounded-full border-2 border-gray-200"
          />
        </div>
        <h1 className="text-2xl font-bold mb-2">Your Name</h1>
        <p className="text-base text-gray-600 mb-4">
          Hi! I am a passionate developer with expertise in building modern web applications. I love exploring new technologies and creating innovative solutions.
        </p>
        <div className="space-x-4">
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" 
             className="text-blue-600 font-medium hover:underline">LinkedIn</a>
          <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer"
             className="text-blue-600 font-medium hover:underline">GitHub</a>
          <a href="mailto:your.email@example.com"
             className="text-blue-600 font-medium hover:underline">Email</a>
        </div>
      </section>
    </main>
  );
}
