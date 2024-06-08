export default function home(){
    return(<><div class="bg-gray-100 flex items-center justify-center h-screen">
    <div class="bg-white shadow-lg rounded-lg max-w-xs overflow-hidden">
    <div class="relative">
      <img class=" w-full h-72 object-cover" src="https://via.placeholder.com/400x300" alt="Profile Image" ></img>
      <div class="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gradient-to-t from-black to-transparent">
        <h2 class="text-white text-xl font-bold">John Doe, 25</h2>
        <p class="text-white">New York, USA</p>
      </div>
    </div>
    <div class="p-4">
      <p class="text-gray-700 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
    </div>
    <div class="px-4 py-2 flex justify-between">
      <button class="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 focus:outline-none">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      <button class="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 focus:outline-none">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </button>
    </div>
  </div></div></>);
}