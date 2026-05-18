const faqitemtitle = document.querySelectorAll('.dprofile-faqs-item-title');



faqitemtitle.forEach((el) => {





   el.addEventListener('click', function( event ){


   const currentTarget = event.currentTarget;

   const parent = currentTarget.closest('.dprofile-faqs-item');


    const hasActive =  parent.classList.contains('active');


   const allitems = document.querySelectorAll('.dprofile-faqs-item');

   if(hasActive)
   {
     parent.classList.remove('active');

      allitems.forEach((item) => {


    item.classList.remove('active');

   });

   }
   else
   {

   allitems.forEach((item) => {


    item.classList.remove('active');

   });

   parent.classList.add('active');


     } 


 
    const mobilemenu_wrapper = document.querySelector('.mobile-menu-wrapper')
 
 
 
    
    
 
 
 });


});