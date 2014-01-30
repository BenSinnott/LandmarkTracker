using System.Web.Mvc;

[assembly: WebActivator.PreApplicationStartMethod(
    typeof(LandmarkTracker.App_Start.SpaRouteConfig), "RegisterSpaPreStart", Order = 2)]

namespace LandmarkTracker.App_Start
{
   ///<summary>
   /// Inserts the HotTowel SPA sample view controller to the front of all MVC routes
   /// so that the HotTowel SPA sample becomes the default page.
   ///</summary>
   ///<remarks>
   /// This class is discovered and run during startup
   /// http://blogs.msdn.com/b/davidebb/archive/2010/10/11/light-up-your-nupacks-with-startup-code-and-webactivator.aspx
   ///</remarks>
   public static class SpaRouteConfig
   {

      public static void RegisterSpaPreStart()
      {

         // Preempt standard default MVC page routing to go to HotTowel Sample
         System.Web.Routing.RouteTable.Routes.MapRoute(
             name: "HotTowelMvc",
             url: "{controller}/{action}/{id}",
             defaults: new
             {
                controller = "Spa",
                action = "Index",
                id = UrlParameter.Optional
             }
         );
      }
   }
}