//
//  ContentView.swift
//  El Vuelo del Grajo
//
//  Created by Santiago Pavón Gómez on 01/11/2020.
//

import SwiftUI

struct ContentView: View {
    
    @EnvironmentObject var citiesModel : CitiesModel
        
    @State var showEditor = false
    
    init() {
        // Usando UIKit:
        UITableView.appearance().backgroundColor = UIColor(named: "fondo")
    }
    
    var body: some View {
        NavigationView {
            List {
                ForEach(citiesModel.cities, id: \.self) {city in
                    NavigationLink(
                        destination: CityWeatherView(cityName: city)) {
                        Text(city)
                    }
                }
                .onDelete(perform: deleteCities)
                .onMove(perform: moveCity)
            }
            .sheet(isPresented: $showEditor, content: {
                CityEditorView()
            })
            .navigationTitle("Ciudades")
            .navigationBarItems(
                leading: HStack {
                    Button(action: {
                        showEditor = true
                    }) {
                        Image(systemName: "plus")
                    }
                    Button(action: {
                        citiesModel.reset()
                    }) {
                        Image(systemName: "arrow.3.trianglepath")
                    }
                },
                trailing: EditButton())
            
            Text("El vuelo del Grajo")
                .padding()
        }
    }
    
    
    func deleteCities(at offsets: IndexSet) {
        citiesModel.cities.remove(atOffsets: offsets)
        citiesModel.saveCities()
    }
        
    func moveCity(from source: IndexSet, to destination: Int) {
        citiesModel.cities.move(fromOffsets: source, toOffset: destination)
        citiesModel.saveCities()
  }

}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
