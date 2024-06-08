export default function bio(){
    return(<div>
        <body class="bg-gray-100">
  <div class="container mx-auto px-4 py-8">
    {/* <!-- Profile Section --> */}
    <div class="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
      <div class="relative">
        <img class="w-full h-72 object-cover" src="https://via.placeholder.com/800x600" alt="Profile Image"></img>
        <div class="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gradient-to-t from-black to-transparent">
          <h2 class="text-white text-2xl font-bold">John Doe, 25</h2>
          <p class="text-white">New York, USA</p>
        </div>
      </div>
      <div class="p-4">
        <p class="text-gray-700 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
      </div>
    </div>

    {/* <!-- Bio Section --> */}
    <div class="bg-white shadow-lg rounded-lg p-6 mb-8">
      <h3 class="text-xl font-semibold mb-4">About Me</h3>
      <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
    </div>

    {/* <!-- Interests Section --> */}
    <div class="bg-white shadow-lg rounded-lg p-6 mb-8">
      <h3 class="text-xl font-semibold mb-4">Interests</h3>
      <div class="flex flex-wrap -m-2">
        <span class="m-2 bg-gray-200 text-gray-800 text-sm font-medium px-4 py-2 rounded-full">Hiking</span>
        <span class="m-2 bg-gray-200 text-gray-800 text-sm font-medium px-4 py-2 rounded-full">Travel</span>
        <span class="m-2 bg-gray-200 text-gray-800 text-sm font-medium px-4 py-2 rounded-full">Cooking</span>
        <span class="m-2 bg-gray-200 text-gray-800 text-sm font-medium px-4 py-2 rounded-full">Reading</span>
        <span class="m-2 bg-gray-200 text-gray-800 text-sm font-medium px-4 py-2 rounded-full">Music</span>
      </div>
    </div>

    {/* <!-- Photos Section --> */}
    <div class="bg-white shadow-lg rounded-lg p-6">
      <h3 class="text-xl font-semibold mb-4">Photos</h3>
      <div class="grid grid-cols-3 gap-4">
        <img class="w-full h-32 object-cover rounded-lg" src="https://via.placeholder.com/200" alt="Photo 1"></img>
        <img class="w-full h-32 object-cover rounded-lg" src="https://via.placeholder.com/200" alt="Photo 2"></img>
        <img class="w-full h-32 object-cover rounded-lg" src="https://via.placeholder.com/200" alt="Photo 3"></img>
        <img class="w-full h-32 object-cover rounded-lg" src="https://via.placeholder.com/200" alt="Photo 4"></img>
        <img class="w-full h-32 object-cover rounded-lg" src="https://via.placeholder.com/200" alt="Photo 5"></img>
        <img class="w-full h-32 object-cover rounded-lg" src="https://via.placeholder.com/200" alt="Photo 6"></img>
      </div>
    </div>
  </div>
</body>
    </div>);
}