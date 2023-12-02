import React, { useState } from 'react';
import teamImage from '../assets/team.jpg';


const ApplyModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: 'male',
    phone: '',
    interests: ''
  });

  if (!isOpen) return null;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  return (
    
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-8 w-3/4 max-w-4xl rounded shadow-lg">
      <h3 className="text-xl text-center font-bold mb-4">Pengisian Formulir</h3>
        <form action="https://formspree.io/f/xgejjqzk" method="POST" className="space-y-4"> 
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" placeholder="example@gmail.com" value={formData.email} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" required />
          </div>
          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Jenis Kelamin</label>
            <select id="gender" name="gender" value={formData.gender} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" required>
              <option value="male">Laki-laki</option>
              <option value="female">Perempuan</option>
            </select>
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Nomor Telepon</label>
            <input type="tel" id="phone" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" required />
          </div>
          <div>
            <label htmlFor="interests" className="block text-sm font-medium text-gray-700">Minat dan Keterampilan</label>
            <textarea id="interests" name="interests" placeholder="Description" value={formData.interests} onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm" rows="4" required></textarea>
          </div>
          <div className="text-right">
            <button type="button" onClick={onClose} className="inline-flex mr-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded hover:bg-gray-300">
              Cancel
            </button>
            <button type="submit" className="inline-flex px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const Apply = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="bg-gray-100 px-4 lg:px-8 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Kolom pertama untuk gambar tim */}
        <div className="lg:col-span-1 flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Join Our Team</h2>
          <img src={teamImage} alt="Our Team" className="rounded-lg shadow-lg"/>
        </div>

        {/* Kolom kedua untuk deskripsi dan tombol */}
        <div className="lg:col-span-2 flex flex-col justify-center  items-start space-y-4">
          <h2 className="text-xl font-bold text-gray-800">Apply Now</h2>
          <p className="text-gray-600 font-sans text-justify">
            Are you passionate about creating seamless user experiences? We're looking for innovative minds to join our dynamic team, where we bring ideas to life through mobile app design, web development, and crafting intuitive UI/UX. If you have a knack for problem-solving and a flair for design, we'd love to hear from you. Dive into a workplace that values creativity and is committed to building impactful digital solutions. Hit 'Apply' to start your journey with us and make a tangible difference in the tech world!
          </p>
          <button 
           onClick={handleOpenModal}
           className="bg-yellow-400 text-white font-bold py-2 px-4 rounded hover:bg-yellow-500 transition-colors">
            Apply
          </button>
        </div>
      </div>
      <ApplyModal isOpen={modalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Apply;
