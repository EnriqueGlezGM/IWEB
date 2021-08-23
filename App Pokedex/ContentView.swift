//
//  ContentView.swift
//  Pokedex
//
//  Created by Santiago Pavón Gómez on 31/07/2020.
//

import SwiftUI

struct ContentView: View {
    
    let pokedexModel = PokedexModel()
    
    var body: some View {
        NavigationView {
            List {
                ForEach(pokedexModel.types, id: \.name) {type in
                    Section(header: HStack {
                        Image(type.icon)
                            .resizable()
                            .frame(width: 50, height: 50)
                        Text(type.name)
                            .font(.largeTitle)
                    }) {
                        ForEach(type.races, id: \.code) { race in
                            NavigationLink(destination: RaceData(race: race)) {
                                ItemRace(race: race)
                            }
                        }
                    }
                }
            }
            .listStyle(GroupedListStyle())
            .navigationBarTitle("Pokedex")
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
