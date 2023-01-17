import List "mo:base/List";
import Text "mo:base/Text";
import Debug "mo:base/Debug";

actor Dtodo{
  stable var dlist : List.List<Text> = List.nil<Text>();
  
  public func addListItem(ditem: Text){
    dlist := List.push(ditem, dlist);
    // Debug.print(debug_show(dlist));
  };

  public query func readList(): async [Text]{
    return List.toArray(dlist);
  };

  public func removeListItem(id: Nat){
    let listFront = List.take(dlist, id);
    let listBack = List.drop(dlist, id+1);
    dlist := List.append(listFront, listBack);
  };
};
