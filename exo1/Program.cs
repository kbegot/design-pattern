using System;
using System.Diagnostics.Contracts;

namespace VehicleManagement
{
public class VehiculeElectrique
  {
      public string Model { get; set; }
      public string Type { get; set; }
      public string Year { get; set; }

  }
 
  public class VehiculeEssence 
  {
      public string Model { get; set; }
      public string Type { get; set; }
      public string Year { get; set; }
  }
 
  public interface IFabriqueVehicule
  {
      VehiculeElectrique CreateVehiculeElectrique();
      VehiculeEssence CreateVehiculeEssence();
  }
 
 
  public class fabriqueVehicule : IFabriqueVehicule
  {
      public VehiculeElectrique CreateVehiculeElectrique()
      {
          return new VehiculeElectrique();
      }

        public VehiculeEssence CreateVehiculeEssence()
        {
            throw new NotImplementedException();
        }
    }

    class Catalogue
    {
        static void Main(string[] args)
        {
            IFabriqueVehicule factory = new fabriqueVehicule();

            VehiculeElectrique vehiculeElectrique = factory.CreateVehiculeElectrique();
            vehiculeElectrique.Model = "Model S";
            vehiculeElectrique.Year = "2023";
            vehiculeElectrique.Type = "Electrique";

            VehiculeEssence vehiculeEssence = factory.CreateVehiculeEssence();
            vehiculeEssence.Model = "F-150";
            vehiculeEssence.Year = "2023";
            vehiculeEssence.Type = "Essence";


            Console.WriteLine("Véhicule électrique :");
            Console.WriteLine($"Model: {vehiculeElectrique.Model}, Year: {vehiculeElectrique.Year}");

            Console.WriteLine("\nVéhicule essence :");
            Console.WriteLine($"Model: {vehiculeEssence.Model}, Year: {vehiculeEssence.Year}");
         

            Console.ReadKey();
        }
    }
}
