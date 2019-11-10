# Why do I care?
Catch regression quickly by verifying relationships at a distance.
Type signatures as documentation - parametricity.
Modeling what is possible to javascript to be verified by the compiler.

# Overview
1. Types as sets.
2. Basics - Classes & Primitives.
3. Type vs Value position
4. Augmentation
   1. if you're fixing public types please PR definitelyTyped - it's easy
5. Aliases
6. Type parameterization (Generics)
   1. Classes, Functions, Types
   2. Referencing previous types
   3. Defaults
7. OR - Disjunction (Union)
8. Type assertions
9.  AND - Conjunction (Intersection)
10. Chaining & Polymorphic this
11. Mapped types
    1. Map but for types! - given a type, get a modified type
    2. Readonly
    3. Partial
12. Conditional Types
    1.  Exclude<T, U> - Things in T except from assignable to U
    2.  Extract<T, U> - Things in T that are assignable to U
    3.  NonNullable<T> - Exclude<T, Null | Undefined>
    4.  ReturnType<T extends Function> - The record type of the function(type)
    5.  InstanceType<T> - The instance type of the class