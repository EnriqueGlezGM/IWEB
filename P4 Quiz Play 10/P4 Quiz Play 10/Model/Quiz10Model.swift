//
//  Quiz10Model.swift
//  P4 Quiz Play 10
//
//  Created by Santiago Pavón Gómez on 04/11/2019.
//  Copyright © 2019 IWEB. All rights reserved.
//

import Foundation


struct QuizItem: Codable {
    let id: Int
    let question: String
    let answer: String
    let author: Author?
    let attachment: Attachment?
    let favourite: Bool
    
    struct Author: Codable {
        let isAdmin: Bool?
        let username: String?
        let accountTypeId: Int?
        let profileName: String?
        let photo: Attachment?
    }
    
    struct Attachment: Codable {
        let filename: String?
        let mime: String?
        let url: URL?
    }
}


class Quiz10Model {
    
    // Token de acceso
    let TOKEN = "7e1bbc4d59fcc50100e3"
        
    var quizzes = [QuizItem]()
    
    func download(completionHandler: @escaping () -> (), errorHandler: @escaping (String) -> ()) {
        
        let surl = "https://core.dit.upm.es/api/quizzes/random10wa?token=\(TOKEN)"

        guard let url = URL(string: surl) else {
            // print("Error: 1 en Play10VC download.")
            errorHandler("URL incorrecto: \(surl)")
            return
        }
               
        print("Iniciando descarga: \(url).")
    
        DispatchQueue.global().async {
            do {
                let data = try Data(contentsOf: url)
                let decoder = JSONDecoder()
                
                 // let str = String(data: data, encoding: String.Encoding.utf8)
                 // print("Play 10 Quizzes ==>", str!)
                
                let quizzes = try decoder.decode([QuizItem].self, from: data)
                
                // print("Play 10 Quizzes descargados")
                
                DispatchQueue.main.async {
                    self.quizzes = quizzes
                    completionHandler()
                }
                
            } catch {
                DispatchQueue.main.async {
                    // print("Fallo Descargando.")
                    errorHandler("Algo chungo ha pasado: \(error.localizedDescription)")
                }
            }
        }
    }
    
}
