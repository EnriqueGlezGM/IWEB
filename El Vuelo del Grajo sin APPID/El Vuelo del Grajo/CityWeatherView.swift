//
//  CityWeather.swift
//  El Vuelo del Grajo
//
//  Created by Santiago Pavón Gómez on 01/11/2020.
//

import SwiftUI
import MapKit

struct CityWeatherView: View {
    
    // Ciudad a mostrar
    var cityName: String
    
    @StateObject var cityWeatherModel: CityWeatherModel = CityWeatherModel()
    
    @State var show_API_ID_Required: Bool = false
    
    var body: some View {
        Form {
            MapView(coordinate:
                        CLLocationCoordinate2D(latitude: CLLocationDegrees(cityWeatherModel.wm.coord.lat),
                                               longitude: CLLocationDegrees(cityWeatherModel.wm.coord.lon)))
                .aspectRatio(1, contentMode: .fit)
            Text2(l: "Temperatura",
                  icon: "thermometer",
                  r: "\(cityWeatherModel.wm.main.temp)ºC")
            Text2(l: "Temperatura Máxima",
                  icon: "thermometer.sun",
                  r: "\(cityWeatherModel.wm.main.temp_max)ºC")
            Text2(l: "Temperatura Mínima",
                  icon: "thermometer.snowflake",
                  r: "\(cityWeatherModel.wm.main.temp_min)ºC")
            Text2(l: "Humedad",
                  icon: "cloud.drizzle",
                  r: "\(cityWeatherModel.wm.main.humidity)%")
            Text2(l: "Presión",
                  icon: "p.square",
                  r: "\(cityWeatherModel.wm.main.pressure)P")
            
            let sr: String = {
                let dateFormatter = DateFormatter()
                dateFormatter.dateFormat = "HH:mm"
                let datess = Date(timeIntervalSince1970: cityWeatherModel.wm.sys.sunrise)
                return dateFormatter.string(from: datess)
            }()
            Text2(l: "Amanece",
                  icon: "sunrise",
                  r: sr)
            
            let ss: String = {
                let dateFormatter = DateFormatter()
                dateFormatter.dateFormat = "HH:mm"
                let datesr = Date(timeIntervalSince1970: cityWeatherModel.wm.sys.sunset)
                return dateFormatter.string(from: datesr)
            }()
            Text2(l: "Anochece",
                  icon: "sunset",
                  r: ss)
            
            List {
                ForEach(cityWeatherModel.wm.weather) {weather in
                    HStack {
                        Label(weather.description, systemImage: "cloud")
                        Spacer()
                        Image(uiImage: cityWeatherModel.getIconNamed(weather.icon))
                    }
                }
            }
        }
        .navigationTitle(cityName)
        .onAppear {
            show_API_ID_Required = cityWeatherModel.APIID == ""
            
            cityWeatherModel.downloadWeather(cityName: cityName)
        }
        .sheet(isPresented: $show_API_ID_Required) {
            CheckAPIId()
        }
    }
}


/*
 let center = CLLocationCoordinate2D(latitude: CLLocationDegrees(wm.coord.lat), longitude: CLLocationDegrees(wm.coord.lon))
 let span = MKCoordinateSpanMake(0.5, 0.5)
 let reg =  MKCoordinateRegionMake(center, span)
 mapView.setRegion(reg, animated: false)
 mapView.mapType = .hybrid
 mapView.isUserInteractionEnabled = false
 */

struct CityWeather_Previews: PreviewProvider {
    static var previews: some View {
        CityWeatherView(cityName: "Madrid")
    }
}
