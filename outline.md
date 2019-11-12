# Why do I care?
Catch regression quickly by verifying relationships at a distance.
Type signatures as documentation - parametricity.
Modeling what is possible to javascript to be verified by the compiler.

# Overview
1. Types as sets
   1. A type is a family of values which share common features (properties, methods, functions)
2. Basics - Classes & Primitives.
   1. Just because you can model everything with strings doesn't mean you should.
3. Type vs Value position
   1. const myInstance: MyClass = new MyClass()
   2. function<myClass> {}
4. Augmentation
   1. Used to tell the compiler there's more stuff in a module than it currently believes (e.g. add a method to Backbone.Model via modifying the prototype).
   2. Declaration merging - Namespaces, Types & Values
   3. If you're fixing public types please PR definitelyTyped - it's easy, I can show you how.
5. Aliases
   1. type myUsefulName = some | crazy & type<shenanigans & tomfoolery>
   2. type Exclude<T, U> = T extends U ? never : T;
6. Type literals
   1. type literallyTheStringOne = "one"
   2. type literallyTheNumberOne = 1
7. Type parameterization (Generics)
   1. Generics are the second more important tool for preserving type information, right after specifying the correct types for input & output.
   2. Places where you can find type parameters
      1. class MyGenericClass<Type>
      2. function MyGenericFunction<Type>
      3. type MyGenericType<Type>
   3. Constraints & Referencing other type parameters
      1. type MyGenericlyGenericType<Type, OtherGenericType<Type>>
      2. type MyGenericTypeConstrained<Type, DerivedType extends Type>
   4. Defaults
      1. class MyCollection<TModel extend Backbone.Model = Backbone.Model> extends Backbone.Collection<TModel>
8. OR - Disjunction (Union)
   1. boolean | number
   2. Only features common across all members of a disjunction are valid on the disjunction itself (it needs to be valid for everybody).
   3. Type assertions to pull apart unions
      1. function isBoolean(maybeBoolean: any): maybeBoolean is boolean
9.  AND - Conjunction (Intersection)
    1.  { foo(): boolean } & {bar(): boolean}
    2.  Only really useful for modeling mixin-style inheritance
10. Chaining & Polymorphic this
    1.  this can be used in type position, and it works exactly how you expect it to.  Use it!
11. Mapped types
    1. Map but for types! - given a type, get a modified type
    2. type Readonly<T> = { readonly [P in keyof T]: T[P]}
    3. type Partial<T> = { [P in keyof T]?: T[P]}
12. Conditional Types
    1.  Exclude<T, U> - Things in T except from assignable to U
        1.  venn diagram example
        type Left = "left" | "middle";
        type Right = "middle" | "right";
        type Excluded = Exclude<Left, Right>;
        const expect: Excluded = "left";
    2.  Extract<T, U> - Things in T that are assignable to U
        1.  venn diagram example
        type Left = "left" | "middle";
        type Right = "middle" | "right";
        type Extracted = Extract<Left, Right>;
        const expect: Extracted = "middle";
    3.  NonNullable<T> - Exclude<T, Null | Undefined>
        1. Push null checking onto the consumer
        function mySafeFunction(paramter: NonNullable<string>): NonNullable<number>
    4.  InstanceType<T> - The instance type of the class
        1.  Useful for generated class definitions - remember class names can be used both in type and value position.
    5.  ReturnType<T extends Function> - The return type of the function(type)
        1.  I'm unsure how this one is more ergonomic than just using generics.