function toggleSidebar(){
     const sidebar= document.getElementById('sidebar');
     sidebar.classList.add('active');
    }
    function closesidebar(){
      const sidebar = document.getElementById('sidebar');
      sidebar.classList.remove('active');
    }
    document.addEventListener('DOMContentLoaded', () => {
      const sidebarLinks = document.querySelectorAll('#sidebar a');
      sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
          closesidebar();
        });
      });
    });