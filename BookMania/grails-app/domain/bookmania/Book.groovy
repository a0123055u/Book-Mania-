package bookmania

class Book {

	String name
    	String author
    	String category
    	String isbn
    	String publisher
    	int copy
	 
	static belongsTo = [user: User]
    static constraints = {
    	

    	//static belongsTo 
    }
}
