export class StudentModel{

    private _id: Number;
    public get id(): Number {
        return this._id;
    }
    public set id(value: Number) {
        this._id = value;
    }
    private _name: String;
    public get name(): String {
        return this._name;
    }
    public set name(value: String) {
        this._name = value;
    }
    private _branch: String;
    public get branch(): String {
        return this._branch;
    }
    public set branch(value: String) {
        this._branch = value;
    }
    private _photo: ImageData;
    public get photo(): ImageData {
        return this._photo;
    }
    public set photo(value: ImageData) {
        this._photo = value;
    }
    private _premium_basic: boolean;
    public get premium_basic(): boolean {
        return this._premium_basic;
    }
    public set premium_basic(value: boolean) {
        this._premium_basic = value;
    }
    private _isPeps: boolean;
    public get isPeps(): boolean {
        return this._isPeps;
    }
    public set isPeps(value: boolean) {
        this._isPeps = value;
    }
}