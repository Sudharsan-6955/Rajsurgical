import Navbar from '@/components/Navbar';

const AdminDashboard = () => {
  return (
    <div>
      <Navbar />
      <main className="p-8">
        <h1 className="text-4xl font-bold">Admin Dashboard</h1>
        {/* 
        
        CATEGORY
        PRODUCT
        PRODUCT DETAILS 
        
        PRODUCT
        NAME
        IMAGE 
        COMPANY 

        PRODUCT DETAILS
        IMAGE 
        NAME 
        COMPANY
        DESCRIPTION
Do you want me to expand EVERY category to 10 products,
each sharing the same filterName and each with a unique 
types value (like the wheelchair example)? 


        


        */}
      </main>
    </div>
  );
};

export default AdminDashboard;
