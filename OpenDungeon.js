var dungeon = dungeon || {};
const jsonExample = {};
const pinkerExample = `
Layout:
    [Area1]...[Area2]
    [Area3]
    
    [Area1]:
        Layout:
            [Room1][Room2][Room3]         
        Relate:
            [Room1]<->[Room2]
            [Room2]<->[Room3]
            [Room3]->[Area2.Room1]
            [Room3]--[Area2.Room2]
    
        [Area1.Room1]:
            Layout:
                [Cluster1][Cluster2]
                [Cluster3]
            [Area1.Room1.Cluster1]:
                Layout:
                    [Obj]
                    [Obj]
                    [Obj]
            [Area1.Room1.Cluster2]:
                Layout:
                    [Obj]
                    [Obj]
            [Area1.Room1.Cluster3]:
                Layout:
                    [Obj]
                    [Obj]
        [Area1.Room2]:
            Layout:
            [Cluster1][Cluster2]
            [Area1.Room2.Cluster2]:
                Layout:
                    [Obj]
        [Area1.Room3]:
            Layout:
            [Cluster1]
    
    [Area2]:
        Layout:
            [Room1][Room2]
        Relate:
        [Room1]->[Room2]
        
        [Area2.Room1]:
            Layout:
            [Cluster1]
            [Area2.Room1.Cluster1]:
                Layout:
                    [Obj]
                    [Obj]
                    [Obj]
        [Area2.Room2]:
            Layout:
            [Cluster1][Cluster2]
            [Area2.Room2.Cluster1]:
                Layout:
                    [Obj]
            [Area2.Room2.Cluster2]:
                Layout:
                    [Obj]

    [Area3]:
        Layout:
            [Room1]
            [Room2]
        Relate:
            [Room1]--[Room2]
            [Area1.Room1]->[Room2]
            [Area2.Room1]->[Room2]
    [Area3.Room1]:
        Layout:
        [Cluster1]
        [Area3.Room1.Cluster1]:
                Layout:
                    [Obj]
    [Area3.Room2]:
        Layout:
        [Cluster1][Cluster2][Cluster3]
        [Area3.Room2.Cluster2]:
                Layout:
                    [Obj]
                    [Obj]
`;
dungeon.draw = function (id, json) {
  const elem = document.getElementById(id);
  elem.innerHTML = pinkerExample;
  pinker.render();
};

function convertJsonToPinker(json) {
  dungeonJson = JSON.parse(json);
}
