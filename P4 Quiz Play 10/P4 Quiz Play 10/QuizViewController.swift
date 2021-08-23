//
//  QuizViewController.swift
//  P4 Quiz Play 10
//
//  Created by Santiago Pavón Gómez on 07/11/2019.
//  Copyright © 2019 IWEB. All rights reserved.
//

import UIKit

class QuizViewController: UIViewController {

    var quiz: QuizItem!
    
    
    @IBOutlet weak var attachmentImageView: UIImageView!
    @IBOutlet weak var questionLabel: UILabel!
    @IBOutlet weak var answerLabel: UILabel!
    @IBOutlet weak var photoImageView: UIImageView!
    
    @IBOutlet weak var textField: UITextField!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        questionLabel.text = quiz.question
        answerLabel.text = quiz.answer
        
        if let img = ImageStore.image(url: quiz.attachment?.url,
                                      downloadHandler: { img in
                                        self.attachmentImageView.image = img
        }) {
            attachmentImageView.image = img
        }
        
        
        if let img = ImageStore.image(url: quiz.author?.photo?.url,
                                      downloadHandler: { img in
                                        self.photoImageView.image = img
        }) {
            photoImageView.image = img
        }
    }
    
    
    @IBAction func checkAnswer(_ sender: Any) {
        textField.resignFirstResponder()
        
        let response = textField.text ?? ""
        if quiz.answer.lowercased() == response.lowercased() {
            alert(msg: "Su respuesta es correcta")
        } else {
            alert(msg: "Su respuesta es incorrecta")
        }
    }
    

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }
    */

}
