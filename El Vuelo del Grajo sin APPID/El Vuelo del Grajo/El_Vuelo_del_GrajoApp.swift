//
//  El_Vuelo_del_GrajoApp.swift
//  El Vuelo del Grajo
//
//  Created by Santiago Pavón Gómez on 01/11/2020.
//

import SwiftUI

@main
struct El_Vuelo_del_GrajoApp: App {
    
    let citiesModel = CitiesModel()
    
    var body: some Scene {
        WindowGroup {
            ContentView()
                .environmentObject(citiesModel)
        }
    }
}
