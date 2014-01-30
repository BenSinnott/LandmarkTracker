using System;
using System.Web.Optimization;

[assembly: WebActivator.PostApplicationStartMethod(
    typeof(LandmarkTracker.App_Start.SpaConfig), "PreStart")]

namespace LandmarkTracker.App_Start
{
   public class SpaConfig
   {
      public static void PreStart()
      {
         // Add your start logic here
         BundleConfig.RegisterBundles(BundleTable.Bundles);
      }
   }
}