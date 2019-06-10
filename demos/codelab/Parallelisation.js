
//Static Parallel
Blockly.Blocks['parallel_construct'] = {
    init: function() {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("Parallelize")
            .appendField(new Blockly.FieldTextInput("Static"), "")
            .appendField(new Blockly.FieldVariable("Chunck Size"), "NAME");
        this.setNextStatement(true, null);
        this.setColour(30);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['parallel_construct'] = function(block) {
    var variable_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '#pragma omp parallel for schedule(static,1) ;\n';
    return code;
};

//Dynamic Parallel
Blockly.Blocks['Dynamic'] = {
    init: function() {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("Parallelize")
            .appendField(new Blockly.FieldTextInput("Dynamic"), "")
            .appendField(new Blockly.FieldVariable("Chunck Size"), "NAME");
        this.setNextStatement(true, null);
        this.setColour(30);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['Dynamic'] = function(block) {
    var variable_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '#pragma omp parallel for schedule(Dynamic,1) ;\n';
    return code;
};

//Guided Parallel
Blockly.Blocks['Guided'] = {
    init: function() {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("Parallelize")
            .appendField(new Blockly.FieldTextInput("Guided"), "");
        this.setNextStatement(true, null);
        this.setColour(30);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['Guided'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '#pragma omp parallel for schedule(Guided,1);\n';
    return code;
};

//Question 1
Blockly.Blocks['questions'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Question 1: System A calculates sum of ");
        this.appendDummyInput()
            .appendField(" two real numbers and prints the output");
        this.appendDummyInput()
            .appendField(" for 10 times. Tell us what ");
        this.appendDummyInput()
            .appendField("  type of scheduling will you use.");
        this.setInputsInline(false);
        this.setColour(300);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['questions'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = ' \n';
    return code;
};

//Question 2
Blockly.Blocks['questions 2'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Question 2: System B performs a series of ");
        this.appendDummyInput()
            .appendField(" operations. Study the dependency and ");
        this.appendDummyInput()
            .appendField("suggest on ways to resolve it. ");
        this.appendDummyInput()
            .appendField(" ");
        this.setInputsInline(false);
        this.setColour(290);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['questions 2'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = ' \n';
    return code;
};

//Question 3
Blockly.Blocks['questions 3'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Question 3: System C performs a series ");
        this.appendDummyInput()
            .appendField("of calculations, inside a loop, that runs for ");
        this.appendDummyInput()
            .appendField("100 times. ");
        this.appendDummyInput()
            .appendField("  ");
        this.setInputsInline(false);
        this.setColour(290);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['questions 3'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = ' ;\n';
    return code;
};

//Question 4
Blockly.Blocks['questions 4'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Question 4: System A calculates market risk");
        this.appendDummyInput()
            .appendField(" real time on trades and market data that are currently");
        this.appendDummyInput()
            .appendField(" stored in a Coherence cache. ");
        this.appendDummyInput()
            .appendField(" stored in a Coherence cache. Currently the");
        this.setInputsInline(false);
        this.setColour(290);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['questions 4'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = ' \n';
    return code;
};

//Task 1
Blockly.Blocks['Task_1'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Details for Q1: Write a loop statement         ");
        this.appendDummyInput()
            .appendField(" that adds two variables, x & y by using  ");
        this.appendDummyInput()
            .appendField("  functions under loop category and uses Print ");
        this.appendDummyInput()
            .appendField("  Statement to see the output, Total time = 5 secs");
        this.setInputsInline(false);
        this.setColour(290);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['Task_1'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = ' ;\n';
    return code;
};

//Task 2
Blockly.Blocks['Task_2'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Details for Q2: a = 10; v = a + 5; u = v + 10;");
        this.appendDummyInput()
            .appendField(" v = a * 8; x = u + v; ");
        this.appendDummyInput()
            .appendField("                                             ");
        this.appendDummyInput()
            .appendField("                                       ");
        this.setInputsInline(false);
        this.setColour(290);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['Task_2'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = ' ;\n';
    return code;
};

//Task 3
Blockly.Blocks['Task_3'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Details for Q3:S: A(i) = B(i+2)+7             ");
        this.appendDummyInput()
            .appendField("  T: B(i*2+1) = A(i-1)                       ");
        this.appendDummyInput()
            .appendField("                                             ");
        this.appendDummyInput()
            .appendField("                                      ");
        this.setInputsInline(false);
        this.setColour(290);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['Task_3'] = function(block) {
    // TODO: Assemble JavaScript into code variable.
    var code = ' ;\n';
    return code;
};
