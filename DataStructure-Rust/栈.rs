//1.栈的定义
struct Stack<T> {
    capacity: u32,
    size: u32,
    in_vec: Vec<T>
}
impl<T> Stack<T> {
    //栈的创建
   fn stackNew(u:u32)->Stack<T>{
       Stack {
            capacity: c,
            size: 0,
            in_vec: Vec::with_capacity(c as usize)
        }
    }
    // 栈的大小
    pub fn stackSize(&mut self)->i32{
        self.size
    }
    // 压栈
    pub fn stackPush(&mut self, value: T)->bool{
        if self.size == self.capacity {
            false
        } else {
            self.in_vec.push(value);
            self.size += 1;
            //Ok(&self.in_vec[(self.size - 1) as usize])
            true
        }
    }
    // 弹栈
    pub fn stackPop(&mut self)-> Option<T>{
         if self.size == 0 {
            None
        } else {
            self.size -= 1;
            self.in_vec.pop()
        }
    }
    // 清空栈
    pub fn stackEmpty(&mut self){
        self.in_vec = vec![];
        self.size = 0;
        self.capacity = 0;
    }
}
