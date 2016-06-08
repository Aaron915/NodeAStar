

function Node(id, parentId) {
    this.id = id;
    this.parentId = parentId;
};

Node.prototype = {
    hScore: function() {
        return 0.00;
    },
    gScore: function() {
        return 0.00;
    },
    fScore: function () {
        return this.hScore() + this.gScore();
    }
};

