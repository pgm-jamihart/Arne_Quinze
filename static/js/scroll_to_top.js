(() => {
  const app = {
    initialize () {
      this.cacheElements();
      this.clickEventListeners();
    },

    cacheElements () {
      this.$BtnToTop = document.querySelector('.btn__to-top');
      this.$pageTop = document.documentElement;
    },

    clickEventListeners () {
      // add event listener to document that has an event on scroll
      document.addEventListener('scroll', (event) => {
        //return the Element that is the root element of the document (html-element) (bovenkant pagina )
        const WindowOnScroll = document.documentElement;
        //if the users scrolls past 600px from teh html-element add active-class
        if (WindowOnScroll.scrollTop > 600) {
          this.$BtnToTop.classList.add('btn__to-top--active');
        } else { //if the users doenst scrolls past 600px from the html-element remove active-class
          this.$BtnToTop.classList.remove('btn__to-top--active');
        }
      })

      this.$BtnToTop.addEventListener('click', (event) => {
        this.$pageTop.scrollTo({
          top: 0,
          behavior: "smooth"
        })
      });
    },

  };
  app.initialize();
})();