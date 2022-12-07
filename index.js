class BinarySearchTree {
  constructor (value) {
    this.value = value
    this.left = null
    this.right = null

  }

  insert(value){
   
    if(this.value > value){
      if(!this.left){
        let newNode = new BinarySearchTree(value)
        this.left = newNode
      }
      else{
        this.left.insert(value)
      }
    }
    else{
      if(!this.right){
        let newNode = new BinarySearchTree(value)
        this.right = newNode
      }
      else{
        this.right.insert(value)
      }
    }

  }

  contains(value){
  
    if(this.value === value){
      return true
    }
    if(this.value > value){
      if(!this.left){
        return false
      }
      else{
        return this.left.contains(value)
      }
      
    }
    else{
      if(!this.right){
        return false
      }
      else{
        return this.right.contains(value)
      }
    }
    

  }
}

module.exports = BinarySearchTree