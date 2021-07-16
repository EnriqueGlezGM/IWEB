//
//  PokeTrisApp.swift
//  PokeTris
//
//  Created by Santiago Pavón Gómez on 06/10/2020.
//

import SwiftUI

@main
struct PokeTrisApp: App {
   
    var body: some Scene {
        
        let score = Score()

        let board = Board(score: score)
        
        board.newGame()

        return WindowGroup {
            ContentView()
                .environmentObject(board)
                .environmentObject(score)
        }
    }
}
 
