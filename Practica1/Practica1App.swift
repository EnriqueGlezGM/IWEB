//
//  Practica1App.swift
//  Practica1 realizada por Pablo, Rober y Enrique
//
//  Created by Enrique Gonzalez on 10/10/2020.
//

import SwiftUI

@main
struct Practica1App: App {
	
	let model = QuizModel.shared //creado a nivel de aplicacion se podria crear en la vista
	let imageStore = ImageStore()
	var scoreModel: ScoreModel = ScoreModel()
	let showScore: Bool = false
	let showScore2: Bool = false
	
    var body: some Scene {
        WindowGroup {
			ContentView(model: model,showScore: showScore, showScore2:showScore2)
				.environmentObject(imageStore)
				.environmentObject(scoreModel)
        }
    }
}
