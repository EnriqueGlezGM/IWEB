//
//  Weather.swift
//  El Vuelo del Grajo
//
//  Created by Santiago Pavón Gómez on 16/11/17.
//  Copyright © 2017 UPM. All rights reserved.
//

import Foundation

struct WeatherMap : Codable {
    
    struct Main : Codable {
        var humidity: Float
        var pressure: Float
        var temp: Float
        var temp_max: Float
        var temp_min: Float
    }
    
    struct Coordinates : Codable {
        var lon: Float
        var lat: Float
    }
    
    struct Sys : Codable {
        var sunrise: Double
        var sunset: Double
    }
    
    struct Weather : Codable, Identifiable {
        var id = UUID()
        var description: String
        var icon: String
        
        private enum CodingKeys : String, CodingKey {
               case description
               case icon
           }
    }
    
    var cod: Int
    var message: String?
    var name: String
    var main: Main
    var coord: Coordinates
    var weather: [Weather]
    var sys: Sys
    
    static let emptyWM = WeatherMap(
        cod: 0,
        name: "",
        main: Main(
            humidity: 0,
            pressure: 0,
            temp: 0,
            temp_max: 0,
            temp_min: 0),
        coord: Coordinates(lon: 0, lat: 0),
        weather: [],
        sys: Sys(sunrise: 0, sunset: 0))
}
