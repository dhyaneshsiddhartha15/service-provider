import React from 'react';

const blogData = [
  {
    id: 1,
    title: "5 Tips for a Clean and Organized Home",
    description: "In this article we will give you some advice on how to keep your home clean and organized",
    author: "Dr. Clean",
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwxfHxIb21lJTIwU2VydmljZXN8ZW58MXx8fHwxNzI4Mjc4NTI5fDA&ixlib=rb-4.0.3&q=80&w=1080',
  },
  {
    id: 2,
    title: "5 Tips for a Well-Maintained Plumbing System",
    description: "In this article we will give you some advice on how to keep your plumbing system in good ...",
    author: "Mr. HVAC",
    image: 'https://images.unsplash.com/photo-1505015920881-0f83c2f7c95e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHw0fHxIb21lJTIwU2VydmljZXMlMkMlMjBQbHVtYmluZ3xlbnwxfHx8fDE3MjgyNzg1Mjl8MA&ixlib=rb-4.0.3&q=80&w=1080',
  },
  {
    id: 3,
    title: "5 Tips for Electrical Repairs",
    description: "In this article we will give you some advice on how to handle electrical repairs at home",
    author: "Lorem ipsum",
    image: 'https://images.unsplash.com/photo-1522444195799-478538b28823?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwxfHxIb21lJTIwU2VydmljZXMlMkMlMjBFbGVjdHJpY2FsJTJDJTIwUmVwYWlyfGVufDF8fHx8MTcyODI3ODUyOXww&ixlib=rb-4.0.3&q=80&w=1080',
  }
];

const BlogCard = ({ title, description, author, image }) => (
  <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
    <div className="relative h-48">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <div className="flex items-center">
        {/* <img src="/api/placeholder/32/32" alt={author} className="w-8 h-8 rounded-full mr-2" /> */}
        <span className="text-sm text-gray-700">{author}</span>
      </div>
    </div>
  </div>
);

function BlogSection() {
  return (
    <div className="bg-blue-100 w-full py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
        Check out our blog
      </h2>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogData.map((item) => (
            <BlogCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogSection;