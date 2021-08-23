//
//  RaceData.swift
//  Pokedex
//
//  Created by Santiago Pavón Gómez on 26/11/2019.
//  Copyright © 2019 IWEB. All rights reserved.
//

import SwiftUI

struct RaceData: View {
    
    let race: Race
    
    var body: some View {
        RaceWeb(race: race)
            .navigationBarTitle(race.name)
    }
}

struct RaceData_Previews: PreviewProvider {
    static var previews: some View {
        RaceData(race: Race(code: 613, name: "Cubchoo", icon: "613"))
    }
}
