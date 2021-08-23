//
//  CitiesModel.swift
//  El Vuelo del Grajo
//
//  Created by Santiago Pavón Gómez on 01/11/2020.
//

import Foundation

class CitiesModel: ObservableObject {
    
    // Fichero donde salvo los nombres de las ciudades.
    let CITIES_FILENAME = "cities.plist"
    
    // Las ciudades a mostrar en la tabla.
    @Published var cities: [String] = []
    
    var citiesPath: String {
        let path = NSSearchPathForDirectoriesInDomains(.documentDirectory,
                                                       .userDomainMask, true)[0]
        
        return (path as NSString).appendingPathComponent(CITIES_FILENAME)
    }
    
    init() {
        loadCities()
    }
    
    fileprivate func loadCities() {
        if let cities = NSArray(contentsOfFile: citiesPath) as? [String] {
            self.cities = cities
        } else {
            cities = ["Madrid","Paris","Lisboa","Londres","Moscu",
                      "Caracas","Tripoli","Tokio"]
        }
    }
    
    func add(cityName: String) {
        cities.append(cityName)
        saveCities()
    }
    
    func reset() {
        cities = ["Madrid","Paris","Lisboa","Londres","Moscu",
                  "Caracas","Tripoli","Tokio"]
        saveCities()
    }
    
    func saveCities() {
        (cities as NSArray).write(toFile: citiesPath, atomically: true)
    }
}
