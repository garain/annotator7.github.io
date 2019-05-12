class Complete {
    constructor (com_in1=0,com_in2=0,com_in3=0) {
        this.com_in1 = com_in1;
        this.com_in2 = com_in2;
        this.com_in3 = com_in3;
    }

    function get_level1 () {
        return this.com_in1;
    }

   function set_level1 (com_in1) {
        this.com_in1 = com_in1;
    }
   function get_level2 () {
        return this.com_in2;
    }

   function set_level2 (com_in2) {
        
        this.com_in2 = com_in2;
        
    }
  function get_level3 () {
        return this.com_in3;
    }

   function set_level3 (com_in3) {
        this.com_in3 = com_in3;
    }
}


