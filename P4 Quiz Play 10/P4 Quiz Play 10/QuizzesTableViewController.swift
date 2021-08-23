//
//  QuizzesTableViewController.swift
//  P4 Quiz Play 10
//
//  Created by Santiago Pavón Gómez on 04/11/2019.
//  Copyright © 2019 IWEB. All rights reserved.
//

import UIKit

class QuizzesTableViewController: UITableViewController {

    var model = Quiz10Model()
    
    
    // Cache para las imagenes.
    // La clave es la url
    var imagesCache = [URL:UIImage]()
    
    override func viewDidLoad() {
        super.viewDidLoad()

        refresh()

    }

        // MARK: - Model
    
    @IBAction func refresh() {
        model.download(completionHandler: {
            self.tableView.reloadData()
        }, errorHandler: { emsg in
            self.alert(msg: "No he podido descargar los quizzes: \(emsg).")
        })
    }
    
    // MARK: - Table view data source

    override func numberOfSections(in tableView: UITableView) -> Int {
        return 1
    }

    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return model.quizzes.count
    }

    
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "Quiz Cell", for: indexPath)
        
        let quiz = model.quizzes[indexPath.row]
        
        cell.textLabel?.text = quiz.question
        cell.detailTextLabel?.text = quiz.author?.username ?? "Anónimo"
        
        cell.imageView?.image = UIImage(named: "none")
        if let img = ImageStore.image(url: quiz.attachment?.url,
                                      downloadHandler: { _ in
                                        self.tableView.reloadRows(at: [indexPath],
                                                                  with: .fade)}) {
            cell.imageView?.image = img
        }
        
        return cell
    }    

    /*
    // Override to support conditional editing of the table view.
    override func tableView(_ tableView: UITableView, canEditRowAt indexPath: IndexPath) -> Bool {
        // Return false if you do not want the specified item to be editable.
        return true
    }
    */

    /*
    // Override to support editing the table view.
    override func tableView(_ tableView: UITableView, commit editingStyle: UITableViewCell.EditingStyle, forRowAt indexPath: IndexPath) {
        if editingStyle == .delete {
            // Delete the row from the data source
            tableView.deleteRows(at: [indexPath], with: .fade)
        } else if editingStyle == .insert {
            // Create a new instance of the appropriate class, insert it into the array, and add a new row to the table view
        }    
    }
    */

    /*
    // Override to support rearranging the table view.
    override func tableView(_ tableView: UITableView, moveRowAt fromIndexPath: IndexPath, to: IndexPath) {

    }
    */

    /*
    // Override to support conditional rearranging of the table view.
    override func tableView(_ tableView: UITableView, canMoveRowAt indexPath: IndexPath) -> Bool {
        // Return false if you do not want the item to be re-orderable.
        return true
    }
    */

    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
        
        if segue.identifier == "Show Quiz",
           let qvc = segue.destination as? QuizViewController {
            
            let ip = tableView.indexPathForSelectedRow
            
            qvc.quiz = model.quizzes[ip!.row]
        }
    }
    
}
