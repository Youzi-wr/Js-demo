// --------------- 类 装饰器 ---------------
var Plan = function () { }
Plan.prototype.fire = function () { console.log('发射普通子弹') }

var MissileDecorator = function (plan) {
    this.plan = plan;
}
MissileDecorator.prototype.fire = function () {
    this.plan.fire();
    console.log('发射导弹')
}

var AtomDecorator = function (plan) {
    this.plan = plan;
}
AtomDecorator.prototype.fire = function () {
    this.plan.fire();
    console.log('发射原子弹')
}

var plan = new Plan();
plan = new MissileDecorator(plan);
plan = new AtomDecorator(plan);

console.log(plan)

plan.fire()


// --------------- 对象 装饰器 ---------------
var plan = {
    fire: function () {
        console.log('发射子弹')
    }
}

function missileDecorator(){
    console.log('发射导弹')
}

function atomDecorator(){
    console.log('发射原子弹')
}

var fire1 = plan.fire;

plan.fire = function(){
    fire1();
    missileDecorator();
}

var fire2 = plan.fire;

plan.fire = function(){
    fire2();
    atomDecorator();
}

plan.fire()