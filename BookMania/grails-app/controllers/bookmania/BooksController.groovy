package bookmania

class BooksController {

    def index() {

    	def guestname = params?.guest?:"mania"

    	render ( view :"/books/index", model: [guestname: guestname])

    }


     
    def list() {

    	def guestname = "Mania"

    	render ( view :"/books/index", model: [guestname: guestname])

    }

     
    def publish() {

    	def guestname = "Mania"

    	render ( view :"/books/index", model: [guestname: guestname])

    }



}
