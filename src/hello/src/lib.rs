use ic_cdk_macros::*;
// use ic_cdk::export::candid;
 

#[query]
fn greeting(_name: String) -> String {
    return "Hello ".to_owned() +&_name+ &" from DFINITY!".to_string();
}