function slidePhones(o){o(".uk-phones-list").each(function(){var n=o(this),e=n.find(".uk-phone"),t=n.find(".uk-show");e.removeClass("uk-show"),t.index()+1==e.length?e.first().addClass("uk-show"):t.next().addClass("uk-show")})}var $options={inputPhoneMask:"+38(999)999-99-99",slidePhoneInterval:2500};!function(o){o(document).ready(function(){if(o(".uk-phone-mask").length){var n={oncomplete:function(){o(this).parents(".uk-form-controls").find('input[type="hidden"]').val(1)},onKeyDown:function(n,e,t,i){if(17!=t){o(this).parents(".uk-form-controls").find('input[type="hidden"]').val(0)}}};o(".uk-phone-mask").inputmask($options.inputPhoneMask,n)}o("a.colorbox").length&&o("a.colorbox").colorbox({maxHeight:"90%",current:"",previous:"",next:"",onLoad:function(){var n=o(window).width();o(this).hasClass("video")&&o(this).colorbox({iframe:!0,innerWidth:640,innerHeight:390}),n<=768?o(this).colorbox({width:"100%",height:"100%",maxHeight:"100%"}):o(this).colorbox({width:!1,height:!1,maxHeight:"90%"})}}),o(".owl-carousel").length&&o(".owl-carousel").owlCarousel({loop:!1,autoplay:!0,autoplayTimeout:5e3,autoplayHoverPause:!0,items:1,dotsClass:"uk-dotnav"}),o(".uk-phones-list").length&&setInterval(slidePhones,$options.slidePhoneInterval,o)})}(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJzbGlkZVBob25lcyIsIiQiLCJlYWNoIiwiJHBob25lc0xpc3QiLCJ0aGlzIiwiJHBob25lcyIsImZpbmQiLCIkYWN0aXZlUGhvbmUiLCJyZW1vdmVDbGFzcyIsImluZGV4IiwibGVuZ3RoIiwiZmlyc3QiLCJhZGRDbGFzcyIsIm5leHQiLCIkb3B0aW9ucyIsImlucHV0UGhvbmVNYXNrIiwic2xpZGVQaG9uZUludGVydmFsIiwiZG9jdW1lbnQiLCJyZWFkeSIsIiRpbnB1dE9wdGlvbnMiLCJvbmNvbXBsZXRlIiwicGFyZW50cyIsInZhbCIsIm9uS2V5RG93biIsImV2ZW50IiwiYnVmZmVyIiwiY2FyZXRQb3MiLCJvcHRzIiwiaW5wdXRtYXNrIiwiY29sb3Jib3giLCJtYXhIZWlnaHQiLCJjdXJyZW50IiwicHJldmlvdXMiLCJvbkxvYWQiLCIkd2luZG93V2lkdGgiLCJ3aW5kb3ciLCJ3aWR0aCIsImhhc0NsYXNzIiwiaWZyYW1lIiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiaGVpZ2h0Iiwib3dsQ2Fyb3VzZWwiLCJsb29wIiwiYXV0b3BsYXkiLCJhdXRvcGxheVRpbWVvdXQiLCJhdXRvcGxheUhvdmVyUGF1c2UiLCJpdGVtcyIsImRvdHNDbGFzcyIsInNldEludGVydmFsIiwialF1ZXJ5Il0sIm1hcHBpbmdzIjoiQUF3RUEsUUFBU0EsYUFBWUMsR0FDakJBLEVBQUUsbUJBQW1CQyxLQUFLLFdBQ3RCLEdBQUlDLEdBQWNGLEVBQUVHLE1BQ1pDLEVBQVVGLEVBQVlHLEtBQUssYUFDM0JDLEVBQWVKLEVBQVlHLEtBQUssV0FDeENELEdBQVFHLFlBQVksV0FDZkQsRUFBYUUsUUFBVSxHQUFNSixFQUFRSyxPQUN0Q0wsRUFBUU0sUUFBUUMsU0FBUyxXQUV6QkwsRUFBYU0sT0FBT0QsU0FBUyxhQWpGekMsR0FBSUUsV0FDQUMsZUFBZ0Isb0JBQ2hCQyxtQkFBb0IsT0FHeEIsU0FBV2YsR0FDUEEsRUFBRWdCLFVBQVVDLE1BQU0sV0FDZCxHQUFJakIsRUFBRSxrQkFBa0JTLE9BQVEsQ0FDNUIsR0FBSVMsSUFDQUMsV0FBWSxXQUNTbkIsRUFBRUcsTUFBTWlCLFFBQVEscUJBQ3RCZixLQUFLLHdCQUF3QmdCLElBQUksSUFFaERDLFVBQVcsU0FBVUMsRUFBT0MsRUFBUUMsRUFBVUMsR0FDMUMsR0FBZ0IsSUFBWkQsRUFBZ0IsQ0FDQ3pCLEVBQUVHLE1BQU1pQixRQUFRLHFCQUN0QmYsS0FBSyx3QkFBd0JnQixJQUFJLEtBSXhEckIsR0FBRSxrQkFBa0IyQixVQUFVZCxTQUFTQyxlQUFnQkksR0FHdkRsQixFQUFFLGNBQWNTLFFBQ2hCVCxFQUFFLGNBQWM0QixVQUNaQyxVQUFXLE1BQ1hDLFFBQVMsR0FDVEMsU0FBVSxHQUNWbkIsS0FBTSxHQUNOb0IsT0FBUSxXQUNKLEdBQUlDLEdBQWVqQyxFQUFFa0MsUUFBUUMsT0FDekJuQyxHQUFFRyxNQUFNaUMsU0FBUyxVQUNqQnBDLEVBQUVHLE1BQU15QixVQUNKUyxRQUFRLEVBQ1JDLFdBQVksSUFDWkMsWUFBYSxNQUdqQk4sR0FBZ0IsSUFDaEJqQyxFQUFFRyxNQUFNeUIsVUFDSk8sTUFBTyxPQUNQSyxPQUFRLE9BQ1JYLFVBQVcsU0FHZjdCLEVBQUVHLE1BQU15QixVQUNKTyxPQUFPLEVBQ1BLLFFBQVEsRUFDUlgsVUFBVyxXQU8zQjdCLEVBQUUsaUJBQWlCUyxRQUNuQlQsRUFBRSxpQkFBaUJ5QyxhQUNmQyxNQUFNLEVBQ05DLFVBQVUsRUFDVkMsZ0JBQWlCLElBQ2pCQyxvQkFBb0IsRUFDcEJDLE1BQU8sRUFDUEMsVUFBVyxjQUlmL0MsRUFBRSxtQkFBbUJTLFFBQ3JCdUMsWUFBWWpELFlBQWFjLFNBQVNFLG1CQUFvQmYsTUFHL0RpRCIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgJG9wdGlvbnMgPSB7XHJcbiAgICBpbnB1dFBob25lTWFzazogJyszOCg5OTkpOTk5LTk5LTk5JyxcclxuICAgIHNsaWRlUGhvbmVJbnRlcnZhbDogMjUwMFxyXG59O1xyXG5cclxuKGZ1bmN0aW9uICgkKSB7XHJcbiAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCQoJy51ay1waG9uZS1tYXNrJykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHZhciAkaW5wdXRPcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgb25jb21wbGV0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciAkZm9ybWdyb3VwID0gJCh0aGlzKS5wYXJlbnRzKCcudWstZm9ybS1jb250cm9scycpO1xyXG4gICAgICAgICAgICAgICAgICAgICRmb3JtZ3JvdXAuZmluZCgnaW5wdXRbdHlwZT1cImhpZGRlblwiXScpLnZhbCgxKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvbktleURvd246IGZ1bmN0aW9uIChldmVudCwgYnVmZmVyLCBjYXJldFBvcywgb3B0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYXJldFBvcyAhPSAxNykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgJGZvcm1ncm91cCA9ICQodGhpcykucGFyZW50cygnLnVrLWZvcm0tY29udHJvbHMnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGZvcm1ncm91cC5maW5kKCdpbnB1dFt0eXBlPVwiaGlkZGVuXCJdJykudmFsKDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgJCgnLnVrLXBob25lLW1hc2snKS5pbnB1dG1hc2soJG9wdGlvbnMuaW5wdXRQaG9uZU1hc2ssICRpbnB1dE9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCQoJ2EuY29sb3Jib3gnKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgJCgnYS5jb2xvcmJveCcpLmNvbG9yYm94KHtcclxuICAgICAgICAgICAgICAgIG1heEhlaWdodDogJzkwJScsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50OiAnJyxcclxuICAgICAgICAgICAgICAgIHByZXZpb3VzOiAnJyxcclxuICAgICAgICAgICAgICAgIG5leHQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyICR3aW5kb3dXaWR0aCA9ICQod2luZG93KS53aWR0aCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCd2aWRlbycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuY29sb3Jib3goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWZyYW1lOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJXaWR0aDogNjQwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIZWlnaHQ6IDM5MFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCR3aW5kb3dXaWR0aCA8PSA3NjgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5jb2xvcmJveCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6ICcxMDAlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmNvbG9yYm94KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6ICc5MCUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJCgnLm93bC1jYXJvdXNlbCcpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAkKCcub3dsLWNhcm91c2VsJykub3dsQ2Fyb3VzZWwoe1xyXG4gICAgICAgICAgICAgICAgbG9vcDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5VGltZW91dDogNTAwMCxcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5SG92ZXJQYXVzZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiAxLFxyXG4gICAgICAgICAgICAgICAgZG90c0NsYXNzOiAndWstZG90bmF2JyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJCgnLnVrLXBob25lcy1saXN0JykubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHNldEludGVydmFsKHNsaWRlUGhvbmVzLCAkb3B0aW9ucy5zbGlkZVBob25lSW50ZXJ2YWwsICQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KShqUXVlcnkpO1xyXG5cclxuZnVuY3Rpb24gc2xpZGVQaG9uZXMoJCkge1xyXG4gICAgJCgnLnVrLXBob25lcy1saXN0JykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyICRwaG9uZXNMaXN0ID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgICAgICRwaG9uZXMgPSAkcGhvbmVzTGlzdC5maW5kKCcudWstcGhvbmUnKSxcclxuICAgICAgICAgICAgICAgICRhY3RpdmVQaG9uZSA9ICRwaG9uZXNMaXN0LmZpbmQoJy51ay1zaG93Jyk7XHJcbiAgICAgICAgJHBob25lcy5yZW1vdmVDbGFzcygndWstc2hvdycpO1xyXG4gICAgICAgIGlmICgoJGFjdGl2ZVBob25lLmluZGV4KCkgKyAxKSA9PSAkcGhvbmVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAkcGhvbmVzLmZpcnN0KCkuYWRkQ2xhc3MoJ3VrLXNob3cnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkYWN0aXZlUGhvbmUubmV4dCgpLmFkZENsYXNzKCd1ay1zaG93Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0iXX0=