import { Matrix4 } from "noobgl-matrix";

export default class Euler {
	constructor( x = 0, y = 0, z = 0, order = "XYZ" ){

		this.set(x, y, z);

		this.order = order;

		return this;

	}
	set( x, y, z ){

		this.x = x;

		this.y = y;

		this.z = z;

		return this;

	}
	add( x, y, z ){

		this.x += x;

		this.y += y;

		this.z += z;

		return this;

	}
	subtract( x, y, z ){

		this.x -= x;

		this.y -= y;

		this.z -= z;

		return this;

	}
	multiply( x, y, z ){

		this.x *= x;

		this.y *= y;

		this.z *= z;

		return this;

	}
	divide( x, y, z ){

		this.x /= x;

		this.y /= y;

		this.z /= z;

		return this;

	}
	clone(){

		return new Euler(this.x, this.y, this.z);

	}
	static from( source, order = "XYZ" ){

		var x = 0;

		var y = 0;

		var z = 0;

		if( source instanceof Matrix4 ){

			switch( order ){

				case "XYZ":

					y = Math.asin(Math.max(-1, Math.min(1, source.m13)));

					if( Math.abs(source.m13) < 0.999999 ){

						x = Math.atan2(-source.m23, source.m33);

						z = Math.atan2(-source.m12, source.m11);

					}
					else {

						x = Math.atan2(source.m32, source.m22);

						z = 0;

					}

					break;

				case "XZY":

					z = Math.asin(-Math.max(-1, Math.min(1, source.m12)));

					if( Math.abs(source.m12) < 0.999999 ){

						x = Math.atan2( m32, m22 );

						y = Math.atan2( m13, m11 );

					}
					else {

						x = Math.atan2( - m23, m33 );

						y = 0;

					}

					break;

				case "YXZ":

					x = Math.asin(-Math.max(-1, Math.min(1, source.m23)));

					if( Math.abs(source.m23) < 0.999999 ){

						y = Math.atan2(source.m13, source.m33);

						z = Math.atan2(source.m21, source.m22);

					}
					else {

						y = Math.atan2(-source.m31, source.m11);

						z = 0;

					}

					break;

				case "YZX":

					z = Math.asin(Math.max(-1, Math.min(1, source.m21)));

					if( Math.abs(source.m21) < 0.999999 ){

						x = Math.atan2(-source.m23, source.m22);

						y = Math.atan2(-source.m31, source.m11);

					}
					else {

						x = 0;

						y = Math.atan2(source.m13, source.m33);

					}

					break;

				case "ZXY":

					x = Math.asin(Math.max(-1, Math.min(1, source.m32)));

					if( Math.abs(source.m32) < 0.999999 ){

						y = Math.atan2(-source.m31, source.m33);

						z = Math.atan2(-source.m12, source.m22);

					}
					else {

						y = 0;

						z = Math.atan2(source.m21, source.m11);

					}

					break;

				case "ZYX":

					y = Math.asin(-Math.max(-1, Math.min(1, source.m31)));

					if( Math.abs(source.m31) < 0.999999 ){

						x = Math.atan2(source.m32, source.m33);

						z = Math.atan2(source.m21, source.m11);

					}
					else {

						x = 0;

						z = Math.atan2(-source.m12, source.m22);

					}

					break;

				default:

					y = Math.asin(Math.max(-1, Math.min(1, source.m13)));

					if( Math.abs(source.m13) < 0.999999 ){

						x = Math.atan2(-source.m23, source.m33);

						z = Math.atan2(-source.m12, source.m11);

					}
					else {

						x = Math.atan2(source.m32, source.m22);

						z = 0;

					}

					break;

			}

			return new Euler(x, y, z, order);

		}

	}
}