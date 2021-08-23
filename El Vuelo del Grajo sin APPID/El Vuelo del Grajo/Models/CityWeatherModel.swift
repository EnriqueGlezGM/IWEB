//
//  CityWeatherModel.swift
//  El Vuelo del Grajo
//
//  Created by Santiago Pavón Gómez on 01/11/2020.
//

import UIKit

class CityWeatherModel: ObservableObject {
    
    // URLs Base de la API y de los iconos.
    fileprivate let API_OPEN_WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather"

    fileprivate let ICON_OPEN_WEATHER_URL = "https://openweathermap.org/img/w"

    // Hay que crearse una cuenta en http://api.openweathermap.org para poder acceder al API.
    let APIID = "3487775b49700c883b40e28147377663"

    @Published var wm: WeatherMap = WeatherMap.emptyWM
    
    
    // Descargar datos usando NSData(contentsOfURL: url)
    func downloadWeather(cityName: String) {
        
        guard let query = "q=\(cityName)&units=metric&lang=sp&APPID=\(APIID)".addingPercentEncoding(withAllowedCharacters: .urlQueryAllowed) else {
            print("Error escapando URL")
            return
        }
        
        guard let url = URL(string: "\(API_OPEN_WEATHER_URL)?\(query)") else {
            print("Error: URL mal formada")
            return
        }
        
        // print("URL = \(url)")
        
        guard let data = try? Data(contentsOf: url) else {
            print("Error: no se han podido descargar los datos.")
            return
        }

        let decoder = JSONDecoder()
        do {
            let wm = try decoder.decode(WeatherMap.self, from: data)
            // print(wm)
            
            if wm.cod == 200 {
                self.wm = wm
            } else {
                print(wm.message ?? "Error: Desconocido")
            }
        } catch {
            print("ERROR: No puedo sacar el JSON:", error.localizedDescription)
            if let strData = String(data: data, encoding: .utf8) {
                print("JSON = \(strData)")
            }
        }
    }

    
    func getIconNamed(_ name: String) -> UIImage {
        
        if let url = URL(string: "\(ICON_OPEN_WEATHER_URL)/\(name).png"),
           let data = try? Data(contentsOf: url),
           let img = UIImage(data: data) {
            return img
        }
        
        return UIImage(systemName: "questionmark.diamond")!
    }
}
