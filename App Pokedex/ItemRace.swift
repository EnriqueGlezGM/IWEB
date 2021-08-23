//
//  ItemRace.swift
//  Pokedex
//
//  Created by Santiago Pavón Gómez on 09/11/2019.
//  Copyright © 2019 IWEB. All rights reserved.
//

import SwiftUI

struct ItemRace: View {
    
    let race: Race
    
    var body: some View {
        HStack {
            Image("\(race.icon)")
                .clipShape(Circle())
                .overlay(Circle().stroke(Color.gray, lineWidth: 2))
            VStack(alignment: .leading) {
                Text(race.name)
                    .font(.headline)
                Divider()
                Text("\(race.code)")
                    .font(.caption)
            }
        }
    }
}

struct ItemRace_Previews: PreviewProvider {
    static var previews: some View {
        ItemRace(race: Race(code: 613, name: "Cubchoo", icon: "613"))
    }
}
